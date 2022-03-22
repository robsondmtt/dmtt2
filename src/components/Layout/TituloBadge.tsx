import { Badge } from "@chakra-ui/react"

interface TituloBadgeProps {
    titulo: string;
}

const TituloBadge = (props: TituloBadgeProps) => {
    return (
        <Badge colorScheme="gray" p="1" borderRadius="lg">{props.titulo}</Badge>
    )
}

export default TituloBadge
