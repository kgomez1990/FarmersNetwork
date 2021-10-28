import React from 'react';

function Profile () {
return (
<div className= "textArea">
    <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Products</label>
        <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Please Enter Item for Sale"></input>
    </div>

    <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Please Enter Description of Products"></textarea>\
        <button class="productButton">Post your Product!</button>
    </div>
</div>
    )
}
Profile();

export default Profile