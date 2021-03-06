export default function Profile(){
    return(
        <div className="container rounded">
        <div className="row">
            <div className="col-md-12">
                <div className="top-breadcrumb my-5">
                
                </div>
            </div>
        </div>
        <div className="img rounded" id="imgEspecial"></div>
        <div className="card social-prof">
            <div className="card-body">
                <div className="wrapper">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="user-profile" />
                    <h3 id="name">Jhon anderson </h3>
                    <p>Web Developer</p>
                </div>
                <div className="row ">
                    <div className="col-lg-12">
                        <ul className=" nav nav-tabs justify-content-center s-nav">
                            <li><a className="active" href="./">Incio</a></li>
                            <li><a href="./">About</a></li>
                            <li><a href="./">Friends</a></li>
                            <li><a href="./">Photos</a></li>
                            <li><a href="./">Videos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <div className="h5 text-blue">@JaneSmith</div>
                        <div className="h7 "><strong>Name :</strong> Jane Smith</div>
                        <div className="h7"><strong>About :</strong> Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js, etc.
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="h6 text-muted">Followers</div>
                            <div className="h5">5.2342</div>
                        </li>
                        <li className="list-group-item">
                            <div className="h6 text-muted">Following</div>
                            <div className="h5">6758</div>
                        </li>
                        <li className="list-group-item">
                            <div className="h6 text-muted">Themes</div>
                            <div className="h5">6758</div>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Latest Photos</h3>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1" className=""></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item active">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 gedf-main">
              
                <div className="card social-timeline-card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Share your insights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="images-tab" data-toggle="tab" role="tab" aria-controls="images" aria-selected="false" href="#images">Share Images</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade active show" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="message">post</label>
                                    <textarea className="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                <div className="form-group">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="customFile" />
                                        <label className="custom-file-label" htmlFor="customFile">Upload image</label>
                                    </div>
                                </div>
                                <div className="py-4"></div>
                            </div>
                        </div>
                        <div className="btn-toolbar justify-content-between">
                            <div className="btn-group">
                                <button type="submit" className="btn btn-theme-primary">share</button>
                            </div>
                            <div className="btn-group">
                                <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-globe"></i>
                                </button>
                                <div className="dropdown-menu " aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="./"><i className="fa fa-globe"></i> Public</a>
                                    <a className="dropdown-item" href="./"><i className="fa fa-users"></i> Friends</a>
                                    <a className="dropdown-item" href="./"><i className="fa fa-user"></i> Just me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
                <div className="card social-timeline-card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                    <img className="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0 text-blue">@JaneSmith</div>
                                    <div className="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop11">
                                        <div className="h6 dropdown-header">Configuration</div>
                                        <a className="dropdown-item" href="./">Save</a>
                                        <a className="dropdown-item" href="./">Hide</a>
                                        <a className="dropdown-item" href="./">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>10 min ago</div>
                        <a className="card-link" href="./">
                            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>
                        <img src="img/gallery/1a.jpg" alt="" className="img-fluid" />

                    </div>
                    <div className="card-footer">
                        <a href="./" className="card-link"><i className="fa fa-gittip"></i> Like</a>
                        <a href="./" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                        <a href="./" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
                <div className="card social-timeline-card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                    <img className="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0 text-blue">@JaneSmith</div>
                                    <div className="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                        <div className="h6 dropdown-header">Configuration</div>
                                        <a className="dropdown-item" href="./">Save</a>
                                        <a className="dropdown-item" href="./">Hide</a>
                                        <a className="dropdown-item" href="./">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i> 10 min ago</div>
                        <a className="card-link" href="./">
                            <h5 className="card-title"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur
                                            deserunt illo esse distinctio.</h5>
                        </a>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis nihil, aliquam est, voluptates officiis iure soluta alias vel odit, placeat reiciendis ut libero! Quas aliquid natus cumque quae repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, excepturi. Doloremque, reprehenderit! Quos in maiores, soluta doloremque molestiae reiciendis libero expedita assumenda fuga quae. Consectetur id molestias itaque facere? Hic!
                        </p>
                        <div>
                            <span className="badge badge-primary">JavaScript</span>
                            <span className="badge badge-primary">Android</span>
                            <span className="badge badge-primary">PHP</span>
                            <span className="badge badge-primary">Node.js</span>
                            <span className="badge badge-primary">Ruby</span>
                            <span className="badge badge-primary">Paython</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a href="./" className="card-link"><i className="fa fa-gittip"></i> Like</a>
                        <a href="./" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                        <a href="./" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
                <div className="card social-timeline-card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                    <img className="rounded-circle" width="45" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0 text-blue">@JaneSmith</div>
                                    <div className="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-ellipsis-h"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop2">
                                        <div className="h6 dropdown-header">Configuration</div>
                                        <a className="dropdown-item" href="./">Save</a>
                                        <a className="dropdown-item" href="./">Hide</a>
                                        <a className="dropdown-item" href="./">Report</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i> Hace 40 min</div>
                        <a className="card-link" href="./">
                            <h5 className="card-title">Totam non adipisci hic! Possimus ducimus amet, dolores illo ipsum quos
                                            cum.</h5>
                        </a>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt fugit reprehenderit consectetur exercitationem odio, quam nobis? Officiis, similique, harum voluptate, facilis voluptas pariatur dolorum tempora sapiente eius maxime quaerat.
                            
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="./" className="card-link"><i className="fa fa-gittip"></i> Like</a>
                        <a href="./" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                        <a href="./" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="card social-timeline-card">
                    <div className="card-body">
                        <h5 className="card-title">People you may know</h5>
                        <ul className="friend-list">
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                </div>
                                <div className="right">
                                    <h3>John Doe</h3>
                                    <p>10 Friends</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}