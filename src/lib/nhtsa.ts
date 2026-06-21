const BASE = 'https://api.nhtsa.gov'

export interface Recall {
  NHTSACampaignNumber: string
  Component: string
  Summary: string
  Consequence: string
  Remedy: string
  Notes: string
  ModelYear: string
  Make: string
  Model: string
  ReportReceivedDate: string
}

export interface Complaint {
  odiNumber: number
  manufacturer: string
  crash: boolean
  fire: boolean
  numberOfInjuries: number
  numberOfDeaths: number
  dateOfIncident: string
  dateComplaintFiled: string
  vin: string
  components: string
  summary: string
}

export interface VinResult {
  Variable: string
  Value: string
  ValueId: string
  VariableId: number
}

export interface SafetyRating {
  VehicleDescription: string
  OverallRating: string
  OverallFrontCrashRating: string
  OverallSideCrashRating: string
  RolloverRating: string
  NHTSAElectronicStabilityControl: string
  NHTSAForwardCollisionWarning: string
  NHTSALaneDepartureWarning: string
}

export async function decodeVin(vin: string): Promise<VinResult[]> {
  const res = await fetch(`${BASE}/vehicles/DecodeVinValues/${vin}?format=json`)
  const data = await res.json()
  return data.Results?.[0] ? Object.entries(data.Results[0]).map(([Variable, Value]) => ({
    Variable, Value: Value as string, ValueId: '', VariableId: 0
  })) : []
}

export async function getRecallsByVin(vin: string) {
  const res = await fetch(`${BASE}/recalls/recallsByVehicleId?vehicleId=${vin}`)
  const data = await res.json()
  return data.results || []
}

export async function getRecallsByVehicle(make: string, model: string, year: string): Promise<Recall[]> {
  const res = await fetch(`${BASE}/recalls/recallsByVehicle?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&modelYear=${year}`)
  const data = await res.json()
  return data.results || []
}

export async function getComplaintsByVehicle(make: string, model: string, year: string): Promise<Complaint[]> {
  const res = await fetch(`${BASE}/complaints/complaintsByVehicle?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&modelYear=${year}`)
  const data = await res.json()
  return data.results || []
}

export async function getMakes(): Promise<{Make_ID: number, Make_Name: string}[]> {
  const res = await fetch(`${BASE}/vehicles/GetMakesForVehicleType/car?format=json`)
  const data = await res.json()
  return data.Results || []
}

export async function getModels(make: string): Promise<{Model_ID: number, Model_Name: string}[]> {
  const res = await fetch(`${BASE}/vehicles/GetModelsForMake/${encodeURIComponent(make)}?format=json`)
  const data = await res.json()
  return data.Results || []
}

export async function getSafetyRatings(year: string, make: string, model: string): Promise<SafetyRating[]> {
  const res = await fetch(`https://api.nhtsa.gov/SafetyRatings/modelyear/${year}/make/${encodeURIComponent(make)}/model/${encodeURIComponent(model)}`)
  const data = await res.json()
  return data.Results || []
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return 'N/A'
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return dateStr
  }
}

export function getRecallSeverity(recall: Recall): 'high' | 'medium' | 'low' {
  const text = (recall.Consequence || '').toLowerCase()
  if (text.includes('death') || text.includes('fatal') || text.includes('fire') || text.includes('crash')) return 'high'
  if (text.includes('injur') || text.includes('accident') || text.includes('loss of control')) return 'medium'
  return 'low'
}
