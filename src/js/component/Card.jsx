import React from "react";

const Card = () => {

    return (
        <>
            <div className="card mt-5" style={{ width: "18rem" }}>
                <img src="https://placehold.co/500x325" className="card-img-top" alt="..." />
                <div classNAme="card-body">
                    <h5 className="card-title text-center mt-3">Card title</h5>
                    <p className="card-text text-center mt-3 p-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default Card;