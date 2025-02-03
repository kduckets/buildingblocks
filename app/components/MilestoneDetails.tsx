import type { BuildingBlockMilestone } from "../../data/milestones"

interface MilestoneDetailsProps {
  milestone: BuildingBlockMilestone
}

export default function MilestoneDetails({ milestone }: MilestoneDetailsProps) {
  return (
    <div className="mt-4 space-y-4">
      <div>
        <h3 className="font-bold text-blue-600">Category</h3>
        <p>{milestone.category}</p>
      </div>
      <div>
        <h3 className="font-bold text-purple-600">Impact</h3>
        <p>{milestone.impact}</p>
      </div>
    </div>
  )
}

