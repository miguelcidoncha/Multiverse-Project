
import React, { useState } from "react";
import { Rating } from "primereact/rating";
import './Rating.css'

function Stars() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e) => setValue(e.value)} cancel={false} />
        </div>
    );
}
        
export default Stars;