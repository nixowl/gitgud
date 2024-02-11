import { ChangeEvent, useRef, useState } from "react"
import Image from "next/image"

import { Icons } from "../icons"
import { Button } from "../ui/button"

export function ChangeWorkspaceImage() {
  const [isLoading, setLoading] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  function handleFileInputClick() {
    fileRef.current?.click()
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (file) {
      setImage(file)
    }
  }

  return (
    <div className="relative">
      {isLoading && <Icons.Spinner className="h-80 w-80 rounded-md object-cover object-center shadow-xl" />}

      {image ? (
        <Image
          src={URL.createObjectURL(image)}
          alt={image.name + " logo"}
          className="h-80 w-80 rounded-md object-cover object-center shadow-xl"
          width={320}
          height={320}
        />
      ) : (
        <Icons.Workspace className="h-80 w-80 rounded-md object-cover object-center shadow-xl" />
      )}

      {image && (
        <Button
          onClick={() => setImage(null)}
          className="absolute right-2 top-2 h-8 w-8 bg-destructive p-0 text-destructive-foreground hover:bg-destructive/90"
          variant="destructive"
          size="icon"
        >
          <Icons.Trash className="size-4" />
        </Button>
      )}

      <input type="file" ref={fileRef} className="hidden" onChange={(event) => handleFileChange(event)} />
      <Button
        disabled={isLoading}
        type="button"
        variant="outline"
        className="mt-4 w-full"
        onClick={handleFileInputClick}
      >
        <Icons.Image className="mr-2 size-4" />
        Upload Image
      </Button>
    </div>
  )
}
