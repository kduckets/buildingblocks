import type { Milestone } from "../../data/milestones"

interface MilestoneDetailsProps {
  milestone: Milestone
}

export default function MilestoneDetails({ milestone }: MilestoneDetailsProps) {
  return (
    <div className="mt-4 space-y-4">
      <div>
        <h3 className="font-bold text-blue-600">Profit Model</h3>
        <p>{milestone.profitModel}</p>
      </div>
      <div>
        <h3 className="font-bold text-purple-600">Impact</h3>
        <p>{milestone.impact}</p>
      </div>
    </div>
  )
}

