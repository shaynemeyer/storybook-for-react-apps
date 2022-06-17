import { Badge } from '../../Badge'
import { Review } from '../../Review'
import { Body, Heading } from '../../typography'

type RestaurantCardProps = {
  name: string
  rating?: number
  specialty: string
  photoUrl: string
  isClosed?: boolean
  categories?: string[]
  isLoading?: boolean
  isNew?: boolean
  onClick: () => void
  className?: string
}

export const RestaurantCard = ({
  photoUrl,
  name,
  specialty,
  rating,
  isClosed = false,
  isLoading = false,
  categories,
  isNew = false,
  className,
  onClick,
}: RestaurantCardProps) => {
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {isNew && <div>new</div>}
      <div>
        {isClosed && <Body type="span">This restaurant is closed.</Body>}
        <img src={photoUrl} alt="restaurant" />
      </div>
      <div>
        <Heading level={2}>{name} </Heading>
        <Review rating={rating} />
        <Body fontWeight="regular">{specialty}</Body>
        {categories?.map((category) => (
          <Badge key={category} text={category} />
        ))}
      </div>
    </div>
  )
}
