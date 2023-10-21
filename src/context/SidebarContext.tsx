import { createContext } from "react"

type SidebarProviderProps = {
    children: React.ReactNode
}

type SidebarContextProps = {
    isLargeOpen: boolean
    isSmallOpen: boolean
    toggle: () => void
    close: () => void
}

const SidebarContext = createContext<SidebarContextProps | null>(null)

export function SidebarProvider({children}: SidebarProviderProps) {
    return (
        <SidebarContext.Provider value={{}} >
            {children}
        </SidebarContext.Provider>
    )
}