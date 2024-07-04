import React from 'react'

const Reseller = () => {
  return (
    <div className="card card-compact card-bordered">
      <h1 className='font-semibold text-2xl text-center m-4'>Add Furniture</h1>
            <form className="card-body box-border mx-60" action="post">
                <label htmlFor="name">Name :</label>
                <input
                    className="input input-bordered card-title"
                    type="text"
                    name="name"
                    id="name"
                />

                <label htmlFor="price">Price :</label>
                <input
                    className="input input-bordered"
                    type="number"
                    step={0.01}
                    min={0.0}
                    name="price"
                    id="price"
                />

                <label htmlFor="colors">Color :</label>
                <input
                    className="input input-bordered"
                    type="text"
                    name="colors"
                    id="colors"
                />

                <label htmlFor="materials">Material :</label>
                <input
                    className="input input-bordered"
                    type="text"
                    name="materials"
                    id="materials"
                />

                <label htmlFor="type">Category :</label>
                <input
                    className="input input-bordered"
                    type="text"
                    name="type"
                    id="type"
                />

                <label htmlFor="dimensions">Dimensions (cm) :</label>
                <input
                    className="input input-bordered"
                    type="text"
                    name="dimensions"
                    id="dimensions"
                />

                <label htmlFor="description">Description :</label>
                <textarea
                    className="textarea textarea-bordered w-full box-border"
                    name="description"
                    id="description"
                ></textarea>

                <label htmlFor="image1">Image :</label>
                <input
                    className="input"
                    type="file"
                    accept="image/png, image/jpeg"
                    name="image1"
                    id="image1"
                />
                
                <label htmlFor="image2">Image 2:</label>
                <input
                    className="input"
                    type="file"
                    accept="image/png, image/jpeg"
                    name="image2"
                    id="image2"
                />

                <div className="card-actions justify-end mt-3 mb-8">
                    <button className="btn bg-[#beaa7c] text-white">
                        Add
                    </button>
                </div>
            </form>
        </div>
  )
}

export default Reseller