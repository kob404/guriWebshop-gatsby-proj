import React from 'react'
import { Link } from 'gatsby'
import Title from '../globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="My Story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nulla omnis accusantium iste.
                            Autem quasi atque reiciendis sunt, quae veritatis voluptatibus explicabo rem voluptas perspiciatis
                            placeat est nam facere quo ea provident voluptatum quas reprehenderit, sapiente fugit suscipit rerum 
                            quod obcaecati. Corporis quod blanditiis possimus temporibus, quis sit repellendus ullam, animi natus 
                            eum vitae! Adipisci obcaecati officia sapiente. Et, commodi!
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>


        </section>
    )
}
