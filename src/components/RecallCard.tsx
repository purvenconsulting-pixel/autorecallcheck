import { AlertTriangle, Wrench, AlertCircle, FileText } from 'lucide-react'
import { Recall, formatDate, getRecallSeverity } from '@/lib/nhtsa'

export default function RecallCard({ recall }: { recall: Recall }) {
  const severity = getRecallSeverity(recall)
  const badgeClass = severity === 'high' ? 'badge-danger' : severity === 'medium' ? 'badge-warning' : 'badge-gray'
  const severityLabel = severity === 'high' ? '⚠ High Risk' : severity === 'medium' ? 'Medium Risk' : 'Low Risk'

  return (
    <div className="card p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <span className={badgeClass}>{severityLabel}</span>
          <p className="text-xs text-gray-500 mt-1">
            Campaign #{recall.NHTSACampaignNumber} · Reported {formatDate(recall.ReportReceivedDate)}
          </p>
        </div>
        <div className="text-right text-sm text-gray-500 shrink-0">
          {recall.ModelYear} {recall.Make} {recall.Model}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex gap-3">
          <AlertCircle className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Component</p>
            <p className="text-sm text-gray-800">{recall.Component || 'N/A'}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <FileText className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">What Happened</p>
            <p className="text-sm text-gray-800">{recall.Summary || 'No summary available.'}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Risk to You</p>
            <p className="text-sm text-gray-800">{recall.Consequence || 'No consequence information available.'}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Wrench className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-0.5">What To Do</p>
            <p className="text-sm text-gray-800">{recall.Remedy || 'Contact your dealer for remedy information.'}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <a
          href={`https://www.nhtsa.gov/vehicle-safety/recalls#recalls-search-by-vin`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-brand-600 hover:underline font-medium"
        >
          View on NHTSA.gov →
        </a>
      </div>
    </div>
  )
}
