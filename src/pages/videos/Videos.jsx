

export default function Videos(){

    const videosLoad =(
                <div className="card  mx-2 h-100 row col-12">
                    <div>  
                    <iframe 
                    width="100%" height="500px"
                   src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe></div>
                   <div className="card-body">
                       <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                  
                   </div>
                   
           </div> 

            )


    return(
        <div className="container">
              <div className=" mx-5  d-flex">
                 {videosLoad}
                 {videosLoad}
                 {videosLoad}
                 {videosLoad}
                 {videosLoad}
                 {videosLoad}
                 {videosLoad}
                 {videosLoad}
                 {videosLoad}



          
            
             
        </div>

        </div>
     
    )
}