// Your code here
function AddFood(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };
    }
    return(
        <div>
            <h3>Add New Food</h3>
            <form>
                onSubmit={handleSubmit}
                <label>Image</label>
                    <input name = "name" type = "text" />
                    <label>Image</label>
            </form> 
        </div>
    )
}

<form>


</form>


export default AddFood;