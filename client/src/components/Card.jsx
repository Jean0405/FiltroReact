import React from 'react'

export const Card = ({products}) => {

  function priceFormatter(price) {
    const priceFormatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    })

    return priceFormatter.format(price)
  }
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-7 pt-5">
        {products.map((item) => (
          <div
            key={item._id}
            className="relative grid grid-cols-1 sm:grid-cols-5 dark:bg-zinc-800 rounded-md bg-lime-500"
          >
            <span className="absolute -top-6 sm:-top-7 -right-2 font-bold text-6xl">{item.rating}</span>
            <img
              src={item?.image}
              alt="product image"
              className="h-full w-full col-span-2 rounded-l-md"
            />
            <div className="grid col-span-3 p-2 sm:p-4 text-lime-500">
              <h1 className="font-bold text-white">{item?.name.toUpperCase()}</h1>
              <span className='font-bold'>{item?.category.toUpperCase()}</span>
              <span>{item?.description}</span>
              <span className="font-bold text-white">{priceFormatter(item.price)} COP</span>
            </div>
          </div>
        ))}
      </div>
  )
}
