import * as React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

// Icons
import DownloadIcon from 'material-ui/svg-icons/file/file-download';

export interface Props {
  images: any;
}

export interface State {

}

export default class ImageGallery extends React.Component<Props, State> {

  render() {
    return (
      <div>
        <h2>Image Gallery</h2>
        <GridList style={{width: '100%'}} cols={2}>
          {this.props.images.map((image, key) => {
            return(
              <GridTile
                key={key}
                title={'download image'}
                actionIcon={
                  <a href={image} download={"image-" + key + ".png"}>
                    <IconButton><DownloadIcon color="white" /></IconButton>
                  </a>
                }
              >
                <img src={image} alt="photo from device" key={key} />
              </GridTile>
            )
          })}
        </GridList>
      </div>
    );
  }
};
