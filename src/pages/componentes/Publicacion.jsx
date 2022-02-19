export default function Publicacion() {
  return (
    <div className="card   mr-5">
      <div className="card-header text-start"><span className="position-relative left-0">Featured</span> <span className="position-absolute end-0">54</span> </div>
      <img src="https://bunkerdb.com/blog/wp-content/uploads/2020/07/Low-code-No-code.jpg"  className="card-img-top img-fluid h-50" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
}
