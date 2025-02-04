export const Grid = () => {
    return(
        <>
        <div className="grid grid-cols-4 gap-4 ">
            <div className="col-span-2 card">1</div>
            <div className="card">2</div>
            <div className="card">3</div>
            <div className="row-span-3 card">4</div>
            <div className="col-span-2 card">5</div>
            <div className="card">6</div>
            <div className="card col-[2/5]">7</div>
            <div className="card">8</div>
            <div className="card">9</div>
        </div>
        <div className="grid grid-cols-2 gap-4 h-[100vh]">
            <div className="col-span-2 card">header</div>
            <div className="col-span-2 card">nav</div>
            <div className="card">section</div>
            <div className="card">article</div>
            <div className="card row-[3/5] col-start-2">aside</div>
            <div className="col-span-2 card">footer</div>
        </div>
        </>
    )
}