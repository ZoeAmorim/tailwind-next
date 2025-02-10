export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-pink-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-brandColor">
          Used Space
        </span>
        <span className="block text-sm/5 text-brandColorShadow">
          Your team has used 80% of your available space. Need more?
        </span>
      </div>

      <div className="h-2 rounded-full bg-pink-100">
        <div className="h-2 w-4/5 rounded-full bg-brandColor"></div>
      </div>

      <div className="space-x-3">
        <button
          className="text-sm font-medium text-brandColor hover:text-pink-700"
          type="button"
        >
          Dismiss
        </button>
        <button
          className="text-sm font-medium text-brandColor hover:text-pink-900"
          type="button"
        >
          Upgrade Plan
        </button>
      </div>
    </div>
  )
}
