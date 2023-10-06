import { LazyLoadImage } from 'react-lazy-load-image-component'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import { ITour } from '../types'

const TourCard = ({ data }: { data: ITour }) => {
  const inputDate = new Date(data.startDates[0])
  const month = inputDate.toLocaleString('default', { month: 'long' })
  const year = inputDate.getFullYear()
  const outputDate = `${month} ${year}`

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src={data.imageCover}
            alt="Tour 1"
            className="card__picture-img"
          />
          <LazyLoadImage src={data.imageCover} effect="blur" />
        </div>

        <h3 className="heading-tertirary">
          <span>{data.name}</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">
          {data?.difficulty} {data?.duration}-day tour
        </h4>
        <p className="card__text">{data.summary}</p>
        <div className="card__data">
          <span className="card__icon">
            <PlaceOutlinedIcon color="primary" fontSize="medium" />
          </span>
          <span>{data?.startLocation?.description}</span>
        </div>
        <div className="card__data">
          <span className="card__icon">
            <CalendarMonthOutlinedIcon color="primary" fontSize="medium" />
          </span>
          <span>{outputDate}</span>
        </div>
        <div className="card__data">
          <span className="card__icon">
            <FlagOutlinedIcon color="primary" fontSize="medium" />
          </span>
          <span>{data?.locations?.length} stops</span>
        </div>
        <div className="card__data">
          <span className="card__icon">
            <Person2OutlinedIcon color="primary" fontSize="medium" />
          </span>
          <span>{data?.maxGroupSize} people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">$297</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">4.9</span>
          <span className="card__footer-text">rating (21)</span>
        </p>
        <a href="#" className="btn btn--green btn--small">
          Details
        </a>
      </div>
    </div>
  )
}

export default TourCard
