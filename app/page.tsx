import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar } from "./_components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
const Home = () => {
  return <div>
    {/* header */}
    <Header />
    <div className="p-5">
      {/* TEXTO */}
      <h2 className="text-xl font-bold">Olá, Renato!</h2>
      <p>Domindo, 11 de agosto.</p>

      {/* BUSCA */}
      <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faça sua busca ...." />
        <Button>
          <SearchIcon />
        </Button>
      </div>

      {/* IMAGEM */}
      <div className="relative mt-6 h-[150px] w-full">
        <Image
          alt="Agende nos melhores com FSW Barber"
          src="/Banner-01.png"
          fill
          className="rounded-xl object-cover"
        />
      </div>
      {/* AGENDAMENTO */}
      <Card className="mt-6">
        <CardContent className="flex justify-between p-0">
          {/* ESQUERDA */}
          <div className=" flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de cabelo</h3>
            <div className="flex iten-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              </Avatar>
              <p className="text-sm">Barbearia do Renato</p>
            </div>
          </div>
          {/* DIREITA */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">11</p>
            <p className="text-sm">20:00</p>
          </div>
        </CardContent>
      </Card>


    </div>

  </div>
}

export default Home