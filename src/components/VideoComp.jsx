import '../styles/VideoComp.css'
function VideoComp({ asset }) {
    return (
        <>
            <div className="video-outer">
                <img src={asset} alt="Asset Video" className="video-comp-asset" />
            </div>
        </>
    );
}

export default VideoComp;