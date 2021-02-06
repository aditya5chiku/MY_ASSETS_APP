import { Avatar } from '@material-ui/core'
import React from 'react'
import './Assets.css'
import Image from './Image'
function AssetsCard({ data }) {
    return (
        <div className="asset__card">
            <div className="asset__card__item">
                <div className="asset__card__header">
                    <div className="asset__card__stats">
                        <Avatar
                            style={{ marginLeft: "5px", marginTop: "0px" }}

                            src={data.author_avatar} />
                        <h6> {data.author_name}</h6>
                    </div>
                </div>
                <div className="asset__card__body">
                    <h6>{data.description}</h6>
                </div>
                <div className="asset__card__footer">

                    <img src={data.thumbnail_url} />
                </div>
            </div>
        </div>
    )
}

export default AssetsCard
