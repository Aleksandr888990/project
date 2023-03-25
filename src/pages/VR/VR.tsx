import './VR.scss'
import IMG from './vrimg.svg'
type Props = {}

const VR = (props: Props) => {
  return (
    <>
      <div className="block1">
        <h2>VR APP Development</h2>
        <img src={IMG} alt="" />
      </div>
      <div className="block2">
        <div className="block3">
          <h3>Header 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
            lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum,
            libero augue venenatis leo, in maximus ipsum dui et est. In in
            aliquet libero. In ac enim non lectus convallis feugiat.
            <br />
            <br /> Ut in pharetra tortor. Quisque ligula magna, iaculis non
            porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac
            dapibus turpis. Etiam suscipit orci eu tristique gravida.
          </p>
        </div>
        <div className="block3">
          <h3>Header 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
            lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum,
            libero augue venenatis leo, in maximus ipsum dui et est. In in
            aliquet libero. In ac enim non lectus convallis feugiat.
            <br />
            <br /> Ut in pharetra tortor. Quisque ligula magna, iaculis non
            porta ut, suscipit sit amet sapien. Sed ut pharetra mauris. Cras ac
            dapibus turpis. Etiam suscipit orci eu tristique gravida.
          </p>
        </div>
      </div>
    </>
  );
}

export default VR