import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
  } from "react-native";
  import React, { Component } from "react";
  import Modal from "react-native-modal";
  import Carousel from "react-native-snap-carousel";
  import PageControl from "react-native-page-control";
  
  const { width } = Dimensions.get("window")
  
 class StepsModal extends Component {
    constructor(props) {
      super(props);
    }
    
    static defaultProps = {
      isVisible: false,
      hideSkipButton: false,
      animationIn: "zoomInDown",
      animationOut: "zoomOutUp",
      animationInTiming: 600,
      animationOutTiming: 600,
      skipLabel: 'Skip',
      doneLabel: 'Done',
      nextLabel: 'Next',
      prevLabel: 'Previous',
      indicatorStyle: { borderRadius: 5, width: 13, height: 13 },
      buttonStyle:  { fontWeight: "bold", fontSize: 14 },
      colortheme: "#48d0cb",
      stepsComponents: []
    }
    
    state = { currentPage: 0 };
  
    _renderNextButton() {
      const nextIndex = this.state.currentPage + 1;
      return (
        <View style={{  marginRight: 10 }} >
          <TouchableOpacity
            onPress={() => {
              this.setState({ currentPage: nextIndex });
              this.carousel.snapToItem(nextIndex);
            }}
          >
            <Text style={[{ color: this.props.colortheme }, this.props.buttonStyle]}>
              {" "}{this.props.nextLabel}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    _renderFinishButton() {
      return (
        <View style={{  marginRight: 10 }} >
          <TouchableOpacity
            onPress={() => this.props.onFinishButtonPress()}
          >
            <Text style={[{ color: this.props.colortheme }, this.props.buttonStyle]}>
            {" "}{this.props.doneLabel}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    _renderSkipButton() {
      return (
        <View style={{  marginLeft: 10 }} >
          <TouchableOpacity
            onPress={() => this.props.onSkipButtonPress()}
          >
            <Text style={[{ color: this.props.colortheme }, this.props.buttonStyle]}>
              {" "}{this.props.skipLabel}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    _renderPreviousButton() {
      const prevIndex = this.state.currentPage - 1;
      return (
        <View style={{  marginLeft: 10 }} >
          <TouchableOpacity
            onPress={() => {
              this.setState({ currentPage: prevIndex });
              this.carousel.snapToItem(prevIndex);
            }}
          >
            <Text style={[{ color: this.props.colortheme }, this.props.buttonStyle]}>
              {" "}{this.props.prevLabel}{" "}
            </Text>
          </TouchableOpacity>
        </View>
      );
      }
  
    isLastStep() {
      return this.props.stepsComponents.length - 1 === this.state.currentPage;
    }
  
    isFirstStep() {
      return this.state.currentPage === 0;
    }
  
    changeIndex = (index) => {
      this.setState({ currentPage: index });
    }
  
    render() {
      let stepsComponents = this.props.stepsComponents;
  
      return (
        <View>
          <Modal isVisible={this.props.isVisible} animationIn={this.props.animationIn}
          animationOut={this.props.animationOut} animationInTiming={this.props.animationInTiming}
          animationOutTiming={this.props.animationOutTiming}>
            <View
              style={styles.modalStyle}
            >
              <View
                style={{
                  marginTop: 17,
                  backgroundColor: "#ffffff",
                  marginLeft: 10,
                  marginRight: 10,
                  alignItems: "center",
                }}
              >
                <Carousel
                  data={stepsComponents}
                  renderItem={({ item }) => item}
                  itemWidth={width/1.2}
                  sliderWidth={width/1.2}
                  ref={ref => (this.carousel = ref)}
                  onSnapToItem={this.changeIndex}
                />
                <PageControl
                  numberOfPages={stepsComponents.length}
                  currentPage={this.state.currentPage}
                  hidesForSinglePage
                  pageIndicatorTintColor="#d3d3d3"
                  currentPageIndicatorTintColor={this.props.colortheme}
                  indicatorStyle={{ borderRadius: 5 ,width: 13, height: 13}}
                  currentIndicatorStyle={this.props.indicatorStyle}
                  onPageIndicatorPress={this.onItemTap}
                />
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                {
                  !this.isFirstStep()
                  ? this._renderPreviousButton()
                  : (this.isFirstStep() && !this.props.hideSkipButton
                      ? this._renderSkipButton()
                      : <View />)
                }
  
                {
                  this.isLastStep()
                  ? this._renderFinishButton()
                  : this._renderNextButton()
                }
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    modalStyle: {
      backgroundColor: "#ffffff",
      borderRadius: 8,
      paddingBottom: 10,
      flex: 0
    },
  });

  export { StepsModal };