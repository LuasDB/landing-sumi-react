import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Table from "@/components/Table"
import AccreditationManager from "@/components/AcreditationManager"

export default function Admin(){
    return (
    <div className="p-10 w-full">
        <Tabs defaultValue="one" className="w-full flex flex-col items-center">
            <TabsList className="mb-6">
                <TabsTrigger value="one">Acreditaciones</TabsTrigger>
                <TabsTrigger value="two">Equipos</TabsTrigger>
                <TabsTrigger value="three">Datos</TabsTrigger>
            </TabsList>

            <TabsContent value="one" className="flex justify-center  w-full min-h-[80vh]">
                <AccreditationManager />

            </TabsContent>

            <TabsContent value="two" >
            </TabsContent>

            <TabsContent value="three" >
                <h3>Este es el 3</h3>
            </TabsContent>

        </Tabs>

    </div>
    )
}