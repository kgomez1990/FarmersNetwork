import React from 'react';

function Profile () {
return (
<div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Products</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Please Enter Item for Sale"></input>
    </div>

    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\
        <button>Post your Product!</button>
    </div>
</div>
    )
}
Profile();

export default Profile