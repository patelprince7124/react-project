import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from "uuid"
import { toast } from "react-toastify"
import { Slide } from "react-toastify"
import { FaTrash, FaEdit } from "react-icons/fa";


const HotelBooking = () => {

  // bookings array ma badha hotel records store thase
  const [bookings, setBookings] = useState([])

  const { register, handleSubmit, reset } = useForm()

  // stored id (edit mode ma current record ni id store thase)
  const [getID, setID] = useState(null)



  // save function – form submit thay tyare call thase
  function save(data) {

    //  ADD MODE
    if (getID == null) {

      const newData = {
        ...data,
        id: uuidv4()     // unique id
      }

      // old bookings + new booking
      const newBookings = [...bookings, newData]

      // state update
      setBookings(newBookings)

      toast.success(`booking successfull!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Slide,
      })
    }

    //  UPDATE MODE
    else {

      // pura array ma loop kari ne je id match thase te record change thase
      const updatedBookings = bookings.map((user) =>
        user.id === getID ? { ...data, id: getID } : user
      )

      // state update
      setBookings(updatedBookings)

      // edit mode off
      setID(null)

      // alert("Booking Updated!")
      toast.warning(`Booking Updated!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Slide,
      })
    }

    //  submit/update pachi form automatic khali thase
    reset(
      {
        customerName: "",
        mobile: "",
        city: "",
        roomType: "",
        checkin: "",
        checkout: ""
      }
    )
  }



  // bookings change thay tyare localStorage ma save
  useEffect(() => {
    if (bookings.length > 0) {
      localStorage.setItem("hotelBookings", JSON.stringify(bookings))
    }
  }, [bookings])



  // page reload thay tyare localStorage mathi data get
  useEffect(() => {
    const hotelData = JSON.parse(localStorage.getItem("hotelBookings")) || []

    if (hotelData.length > 0) {
      setBookings(hotelData)
    }
  }, [])



  // delete function
  function trash(id) {
    if (window.confirm("Do you want to delete this booking?")) {

      const filterData = bookings.filter(book => book.id !== id)
      setBookings(filterData)

      if (filterData.length === 0) {
        localStorage.removeItem("hotelBookings")
      }

      toast.error("Booking Deleted Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Slide,
      })
    }
  }



  // edit function

  function update(id) {

    // je record edit karvo che eni id store karse
    setID(id)

    // pura array mathi ek record find karse
    const singleuser = bookings.find(user => user.id === id)

    // form ma automatic data fill thase
    reset(singleuser)
  }



  return (
    <>
      <h1 className="text-center mt-3">Hotel Booking</h1>

      <form
        className="col-lg-8 mx-auto my-5 p-5 shadow"
        onSubmit={handleSubmit(save)}
      >

        <div className="mt-3">
          <input
            type="text"
            {...register("customerName")}
            placeholder="Enter Customer Name"
            className="form-control"
          />
        </div>

        <div className="mt-3">
          <input
            type="text"
            {...register("mobile")}
            placeholder="Enter Mobile Number"
            className="form-control"
          />
        </div>

        <div className="mt-3">
          <input
            type="text"
            {...register("city")}
            placeholder="Enter City"
            className="form-control"
          />
        </div>

        <div className="mt-3">
          <select {...register("roomType")} className="form-control">
            <option value="">Select Room Type</option>
            <option>Single</option>
            <option>Double</option>
            <option>Deluxe</option>
          </select>
        </div>

        <div className="mt-3">
          <input type="date" {...register("checkin")} className="form-control" />
        </div>

        <div className="mt-3">
          <input type="date" {...register("checkout")} className="form-control" />
        </div>

        <div className="mt-3">
          {
            getID == null ?
              <button className="btn btn-success w-100">Submit</button>
              :
              <button className="btn btn-warning w-100">Update</button>
          }
        </div>

      </form>




      <div className="container mt-4">
        <table className="table table-success table-hover table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Room</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              bookings.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td>{book.customerName}</td>
                  <td>{book.mobile}</td>
                  <td>{book.city}</td>
                  <td>{book.roomType}</td>
                  <td>{book.checkin}</td>
                  <td>{book.checkout}</td>
                  <td>
                    <button
                      onClick={() => trash(book.id)}
                      className="btn btn-danger btn-sm me-2"
                    >
                      <FaTrash />
                    </button>

                    <button
                      onClick={() => update(book.id)}
                      className="btn btn-warning btn-sm"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </>
  )
}

export default HotelBooking