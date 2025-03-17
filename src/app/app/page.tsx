import { formattedDate } from "@/utils/DataUtils";

export default function App() {
    return (
        <div className="py-4">
            <div className="text-center">
                <h1 className="font-bold text-lg">{formattedDate}</h1>
            </div>
        </div>
    )
}