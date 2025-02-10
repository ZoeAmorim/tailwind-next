import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/zoeamorim.png"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Zoe Amorim</span>
        <span className="truncate text-sm text-zinc-500">
          zoealcantara03@outlook.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
