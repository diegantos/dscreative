export const Section = () => {
    return(
        <div className="Section">
            <div className="Section-photography">    
                <a href="videography.html">
                    <div class="work__element work__video"></div>
                    <div class="work__text">
                        <p>creative filmmaking / brand work</p>
                        <h2>videography</h2>
                        <div class="guion"></div>
                    </div>
                </a>
            </div>
            <a href="photography.html">
                <div class="work__element work__photo"></div>
                <div class="work__text">
                    <p>from nature to festivals</p>
                    <h2>photography</h2>
                    <div class="guion"></div>
                </div>
            </a>
        </div>
    )
}