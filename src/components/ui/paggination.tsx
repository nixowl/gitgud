import { Icons } from "../icons"
import { Button } from "./button"

type PagginationProps = {
  page: number
  lastPage: number
  selectPage: (page: number) => void
}

export function Paggination({ page, lastPage, selectPage }: PagginationProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        className="size-8 p-0"
        onClick={() => selectPage(page - 1)}
        variant="outline"
        size="icon"
        disabled={page === 1}
      >
        <Icons.Left className="size-5" />
      </Button>
      {Array.from({ length: lastPage }, (_, i) => i + 1).map((item, index) => (
        <Button
          key={index}
          className="size-8 p-0"
          onClick={() => selectPage(item)}
          variant="outline"
          size="icon"
          disabled={page === item}
        >
          {item}
        </Button>
      ))}
      <Button
        className="size-8 p-0"
        onClick={() => selectPage(page + 1)}
        variant="outline"
        size="icon"
        disabled={page === lastPage}
      >
        <Icons.Right className="size-5" />
      </Button>
    </div>
  )
}
