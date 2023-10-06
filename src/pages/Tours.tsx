import { useEffect, useState } from 'react'
import { fetchAllTours } from '../services/tours.service'
import TourCard from '../components/TourCard'
import LocalLoading from '../components/LocalLoading'
import { ITour } from '../types'

const Tours = () => {
  const [tourArr, setTourArr] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const data: any = await fetchAllTours()

      setTourArr(data?.data?.data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="main">
      {loading ? (
        <LocalLoading />
      ) : (
        <div className="card-container">
          <>
            {tourArr?.map((item: ITour) => (
              <div key={item._id}>
                <TourCard data={item} />
              </div>
            ))}
          </>
        </div>
      )}
    </div>
  )
}

export default Tours
