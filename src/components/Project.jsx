export default function Project(props) {
    const link = props.click;
    function click(){location.assign(link);}
    return (
<section className={"flex-item "+ props.classNames} onClick={click}>
            <div><h3>{props.name} <a href={props.referenceLink}><img src='./images/github_icon.png' width="45" height="45" className='round'/></a></h3></div>
          </section>
    );
  }



