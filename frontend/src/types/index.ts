import type React from "react"

export interface UploadParams {
    label: string,
    file: File | null
    onClean: () => void
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void
}