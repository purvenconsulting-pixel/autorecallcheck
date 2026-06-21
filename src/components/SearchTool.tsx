'use client'
import { useState } from 'react'
import { Search, Car, Hash, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react'
import { getRecallsByVehicle, getComplaintsByVehicle, getMakes, getModels, decodeVin, Recall, Complaint } from '@/lib/nhtsa'
import RecallCard from './RecallCard'

const YEARS = Array.from({ length: 30 }, (_, i) => String(new Date().getFullYear() - i))
const POPULAR_MAKES = ['Toyota', 'Ford', 'Chevrolet', 'Honda', 'Nissan', 'Dodge', 'Jeep', 'BMW', 'Mercedes-Benz', 'Hyundai', 'Kia', 'Volkswagen', 'Subaru', 'Mazda', 'GMC', 'Ram', 'Audi', 'Tesla', 'Lexus', 'Acura']

export default function SearchTool() {
  const [tab, setTab] = useState<'vehicle' | 'vin'>('vehicle')
  const [year, setYear] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [vin, setVin] = useState('')
  const [models, setModels] = useState<string[]>([])
  const [recalls, setRecalls] = useState<Recall[]>([])
  const [complaints, setComplaints] = useState<Complaint[]>([])
  const [vinData, setVinData] = useState<{[key:string]: string} | null>(null)
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState('')

  async function handleMakeChange(m: string) {
    setMake(m)
    setModel('')
    if (m) {
      const ms = await getModels(m)
      setModels(ms.map(x => x.Model_Name).sort())
    }
  }

  async function handleVehicleSearch() {
    if (!year || !make || !model) { setError('Please select year, make, and model.'); return }
    setLoading(true); setError(''); setSearched(false)
    try {
      const [r, c] = await Promise.all([
        getRecallsByVehicle(make, model, year),
        getComplaintsByVehicle(make, model, year)
      ])
      setRecalls(r); setComplaints(c); setVinData(null)
    } catch { setError('Failed to fetch data. Please try again.') }
    finally { setLoading(false); setSearched(true) }
  }

  async function handleVinSearch() {
    if (!vin || vin.length !== 17) { setError('Please enter a valid 17-character VIN.'); return }
    setLoading(true); setError(''); setSearched(false)
    try {
      const fields = await decodeVin(vin)
      const map: {[key:string]: string} = {}
      fields.forEach(f => { if (f.Value && f.Value !== 'Not Applicable') map[f.Variable] = f.Value })
      setVinData(map); setRecalls([]); setComplaints([])
      const y = map['Model Year'], mk = map['Make'], mo = map['Model']
      if (y && mk && mo) {
        const r = await getRecallsByVehicle(mk, mo, y)
        setRecalls(r)
      }
    } catch { setError('Failed to decode VIN. Please check and try again.') }
    finally { setLoading(false); setSearched(true) }
  }

  const importantVinFields = ['Make','Model','Model Year','Vehicle Type','Body Class','Engine Number of Cylinders','Displacement (L)','Fuel Type - Primary','Drive Type','Transmission Style','Plant City','Plant Country','Manufacturer Name']

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setTab('vehicle')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${tab === 'vehicle' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          <Car className="w-4 h-4" /> Year / Make / Model
        </button>
        <button
          onClick={() => setTab('vin')}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${tab === 'vin' ? 'border-brand-600 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
        >
          <Hash className="w-4 h-4" /> VIN Number
        </button>
      </div>

      {tab === 'vehicle' ? (
        <div className="flex flex-col md:flex-row gap-3">
          <select value={year} onChange={e => setYear(e.target.value)} className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white">
            <option value="">Select Year</option>
            {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <select value={make} onChange={e => handleMakeChange(e.target.value)} className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white">
            <option value="">Select Make</option>
            {POPULAR_MAKES.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <select value={model} onChange={e => setModel(e.target.value)} className="flex-1 border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white" disabled={!make}>
            <option value="">Select Model</option>
            {models.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <button onClick={handleVehicleSearch} disabled={loading} className="btn-primary whitespace-nowrap">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            {loading ? 'Searching...' : 'Check Recalls'}
          </button>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-3">
          <input
            value={vin}
            onChange={e => setVin(e.target.value.toUpperCase())}
            placeholder="Enter 17-character VIN (e.g. 1HGBH41JXMN109186)"
            maxLength={17}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-500 tracking-wider"
          />
          <button onClick={handleVinSearch} disabled={loading} className="btn-primary whitespace-nowrap">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            {loading ? 'Decoding...' : 'Decode VIN'}
          </button>
        </div>
      )}

      {error && <p className="mt-3 text-sm text-red-600 flex items-center gap-1"><AlertTriangle className="w-4 h-4" />{error}</p>}

      {/* VIN Decode Results */}
      {vinData && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🔍 VIN Decoded: {vin}</h3>
          <div className="card p-5 grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {importantVinFields.filter(f => vinData[f]).map(f => (
              <div key={f}>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{f}</p>
                <p className="text-sm font-semibold text-gray-800">{vinData[f]}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recall Results */}
      {searched && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">
              {recalls.length > 0
                ? <span className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-500" />{recalls.length} Recall{recalls.length !== 1 ? 's' : ''} Found</span>
                : <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" />No Recalls Found</span>
              }
            </h3>
            {complaints.length > 0 && (
              <span className="badge-warning">{complaints.length} Complaints on Record</span>
            )}
          </div>

          {recalls.length === 0 && (
            <div className="card p-6 text-center">
              <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
              <p className="font-semibold text-gray-800">No open recalls found in NHTSA database.</p>
              <p className="text-sm text-gray-500 mt-1">This doesn't guarantee there are no issues — always verify with your dealer and check the vehicle's service history.</p>
            </div>
          )}

          <div className="space-y-4">
            {recalls.map((r, i) => <RecallCard key={i} recall={r} />)}
          </div>

          {complaints.length > 0 && (
            <div className="mt-6 card p-5 bg-yellow-50 border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Owner Complaints ({complaints.length})
              </h4>
              <p className="text-sm text-yellow-700 mb-3">These are problems reported directly by owners — not official recalls, but worth reviewing.</p>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {complaints.slice(0, 10).map((c, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 text-sm border border-yellow-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-800">{c.components}</span>
                      {c.crash && <span className="badge-danger">Crash</span>}
                      {c.fire && <span className="badge-danger">Fire</span>}
                    </div>
                    <p className="text-gray-600 text-xs line-clamp-2">{c.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-xs text-gray-400 mt-4 text-center">
            Source: NHTSA.gov · Data updated daily · <a href="https://www.nhtsa.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">Verify at NHTSA.gov</a>
          </p>
        </div>
      )}
    </div>
  )
}
