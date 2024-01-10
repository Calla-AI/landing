import { FC, PropsWithChildren } from "react"

export type FeatureType = {
    title: string
    icon: React.ReactNode
    description: string
}

const Feature = ({ title, icon, description, children }: PropsWithChildren<FeatureType>) => {

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-center">{description}</p>
            {children}
        </div>
    )
}

export default Feature;