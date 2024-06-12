import Image from "next/image";
import "./not-found.css";
import LinkHome from "@/components/LinkHome"

export default function notFound() {
    return (
        <html>
            <body>
                <div className="relative not-fount-page h-[100vh] flex flex-col justify-start items-center">
                    <LinkHome/>
                    <div className="main-404-img flex-1 flex justify-center items-center">
                        <Image className="img-404 w-[300px] sm:w-[70%] max-h-full h-auto" src={'/4o4.png'} width={1100} height={731} alt="4o4"/>
                    </div>
                </div>
            </body>
        </html>
    )
}