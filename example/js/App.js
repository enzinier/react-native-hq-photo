import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PhotoView from './PhotoView';

class App extends Component {
  constructor(props) {
    super(props);
    this.sources = [
      'https://lh6.googleusercontent.com/proxy/A1X-FIc16TZ-Rflm3nP6oVTz2HG0b24kk0JMOevs2uGCimL2io6FLAOHS6fPHuIE_4JYiZ3eHL8e7PZ3iVdaQ69Es4tWgw9Eef6EQWefUACWqwbwEV76kwMI7DsITmGBzPPqz071M_rYcij6CwW-DwGzVc_jDw=w406-h270',
      'https://lh3.googleusercontent.com/proxy/JU0LsZ4uJhdcDgC6xG2GMIhjvOL6ZQS7ZQb506Ftezsor94B1nQ_v_Q__37fehS_-kup6a7SGZkpq73TgsZrA1GMQ5GODbTEJ5OGt_jKfCl4LLcsPpt2qkXtVZxlykraamZAb_QTq1DEvDHE5JH9Ra6tvHDUNw=w406-h229',
      'https://lh3.googleusercontent.com/proxy/-yj2m7B5gWU87-r74-vvYA2yotfQVyySIaVcC2zl5K7kMPXpl9okaWmHUqQO4VgINqKhbuOhAjjS9pJV07OaXBfULpEqP4f1LFdUhmv07NMAgqzTcb2NChwJSmNC765BzJYGsh9dRh4ltmp5dZDl1KGHQqNYzM8=w406-h270',
      'https://lh3.googleusercontent.com/proxy/XkgPCVECLRF1d_sISJO0-grxUFLtqkrRz6fS9VneviuGl6xWxVKddHmFL3uD08ffLBtKLgRU9i5fDZyEYq18QSZHrsQ1KeROl6J80RPFzzMNs_mStpjp-tkSfBos67AMystV69-vlAUiepWwVKY2FayNNI94-Q=w406-h270'
    ];
    this.defaultSource = require('./images/react.png');
  }

  _onCloseModalPhotoView = () => {};

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            PhotoView Example
          </Text>
        </View>
        {/*<PhotoView onCloseModalPhotoView={this._onCloseModalPhotoView}*/}
                   {/*defaultSource={this.defaultSource}*/}
                   {/*height={300}*/}
                   {/*sources={this.sources}*/}
                   {/*modalHeader="Header"*/}
                   {/*modalHeaderClose="X"*/}
                   {/*modalImageGap={0}*/}
                   {/*styleModalHeader={{}}*/}
                   {/*styleModalHeaderClose={{}}*/}
                   {/*styleBackgroundColor="white"*/}
                   {/*styleIndicatorBoardHeight={22}*/}
                   {/*styleIndicatorBoardBackgroundColor="rgba(0, 0, 0, .0)"*/}
                   {/*styleIndicatorWidth={24}*/}
                   {/*styleIndicatorHeight={4}*/}
                   {/*styleIndicatorGap={0}*/}
                   {/*styleIndicatorColor="rgba(250, 250, 250, .8)"*/}
                   {/*styleIndicatorColorSelected="rgba(70, 180, 100, 1)"*/}
                   {/*styleIndicatorBorderWidth={1}*/}
                   {/*styleIndicatorBorderColor="rgba(250, 250, 250, .1)"*/}
                   {/*styleIndicatorBorderRadius={0} />*/}
        <PhotoView height={300}
                   sources={this.sources} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingTop: (Platform.OS === 'android' ? 0 : 20),
    justifyContent: 'center'
  },
  header: {
    height: 40,
    paddingTop: 10,
    textAlign: 'center'
  }
});

export default App;