import { Icons } from "../icons"
import { Button } from "../ui/button"

export function DeleteWorkspaceModal() {
  function deleteWorkspace() {
    // TOOD...
  }
  return (
    <>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Icons.Warning className="h-16 w-16 text-destructive" />

        <div className="grid flex-1 gap-1">
          <h2 className="font-medium">Delete Workspace</h2>
          <p className="text-sm text-muted-foreground">
            This action is irreversible. All data will be lost, please take this action with caution.
          </p>
        </div>
      </div>

      <Button onClick={deleteWorkspace} className="self-end" variant="destructive">
        Delete Workspace
      </Button>
    </>
  )
}
