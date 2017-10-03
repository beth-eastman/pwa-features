import * as React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import { AppPageInterface } from '../Main';

// Icons
import DownloadIcon from 'material-ui/svg-icons/file/file-download';

export interface Props {
  appPage: AppPageInterface;
  images: any;
}

export interface State {

}

export default class ImageGallery extends React.Component<Props, State> {

  responsiveColumns = () => {
    // const width = this.props.appPage.screen.width;
    // if (!width) {
    //   return 1;
    // }
    // if (width > 1200) {
    //   return 4;
    // }
    // if (width > 900) {
    //   return 3;
    // }
    // if (width > 600) {
    //   return 2;
    // }
    return 2;
  }

  render() {

    return (
      <div>
        <h2>Image Gallery</h2>
        <GridList style={{width: '100%'}} cols={this.responsiveColumns()}>
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
