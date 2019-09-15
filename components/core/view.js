import React from 'react';
import {
    asset,
    Pano,
    Text,
    View as VrView,
    Plane,
    StyleSheet
} from 'react-360';

const DEFAULT_BACKGROUND_COLOR = "transparent"
const DEFAULT_HOVER_COLOR = "#eceeef"
const DEFAULT_ACTIVE_BORDER_COLOR = "#0275d8";
const DEFAULT_INACTIVE_BORDER_COLOR = "#eceeef";

export default class View extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        currentBackgroundColor: this.props.bg || DEFAULT_BACKGROUND_COLOR,
        hovered: false
    }

    componentWillReceiveProps(nextProps) {
        const { bg } = nextProps
        const { hovered } = this.props
        if (!hovered) {
            this.setState({ currentBackgroundColor: bg || DEFAULT_BACKGROUND_COLOR })
        }
    }

    getPadding() {
        var { p, pl, pr, pt, pb, smp, mdp, lgp, xlp,
            smpl, smpr, smpt, smpb, mdpl, mdpr, mdpt, mdpb, lgpl, lgpr, lgpt, lgpb,
            xlpr, xlpl, xlpt, xlpb } = this.props
        const sm = 0.02
        smp = smp ? sm : null
        smpl = smpl ? sm : null
        smpr = smpr ? sm : null
        smpb = smpb ? sm : null
        smpt = smpt ? sm : null
        const md = 0.05
        mdp = mdp ? md : null
        mdpl = mdpl ? md : null
        mdpr = mdpr ? md : null
        mdpb = mdpb ? md : null
        mdpt = mdpt ? md : null
        const lg = 0.07
        lgp = lgp ? lg : null
        lgpl = lgpl ? lg : null
        lgpr = lgpr ? lg : null
        lgpb = lgpb ? lg : null
        lgpt = lgpt ? lg : null
        const xl = 0.1
        xlp = xlp ? xl : null
        xlpl = xlpl ? xl : null
        xlpr = xlpr ? xl : null
        xlpb = xlpb ? xl : null
        xlpt = xlpt ? xl : null
        var padding = smp || mdp || lgp || xlp || p
        var style = {
            padding,
            paddingTop: pt || smpt || mdpt || lgpt || xlpt || padding,
            paddingBottom: pb || smpb || mdpb || lgpb || xlpb || padding,
            paddingLeft: pl || smpl || mdpl || lgpl || xlpl || padding,
            paddingRight: pr || smpr || mdpr || lgpr || xlpr || padding
        }
        return style
    }

    getItemsAlignment() {
        const { row, vstart, vcenter, hcenter, vend, hstart, hend, spread, push, flex } = this.props
        var style = { flexDirection: row ? 'row' : "column" }

        if (flex) {
            style['flex'] = 1
        }

        var vprop = row ? 'alignItems' : "justifyContent"
        if (vcenter) {
            style[vprop] = "center"
        }
        if (vstart) {
            style[vprop] = "flex-start"
        }
        if (vend) {
            style[vprop] = "flex-end"
        }

        var hprop = row ? "justifyContent" : 'alignItems'
        if (hcenter) {
            style[hprop] = "center"
        }
        if (hstart) {
            style[hprop] = "flex-start"
        }
        if (hend) {
            style[hprop] = "flex-end"
        }
        if (spread) {
            style['justifyContent'] = "space-around"
        }
        if (push) {
            style['justifyContent'] = "space-between"
        }
        return style
    }

    getDimensions() {
        const { w, h } = this.props
        var style = {}

        if (w) {
            style['width'] = w
        }
        if (h) {
            style['height'] = h
        }
        return style
    }

    getBorderStyle() {
        const { border } = this.props
        const { hovered } = this.state
        var style = {}
        if (border) {
            var borderColor = hovered ? border.activeColor || border.color || DEFAULT_ACTIVE_BORDER_COLOR : border.inactiveColor || border.color || DEFAULT_INACTIVE_BORDER_COLOR
            style = {
                borderColor,
                borderWidth: border.width,
                borderTopWidth: border.top || border.width,
                borderBottomWidth: border.bottom || border.width,
                borderLeftWidth: border.left || border.width,
                borderRightWidth: border.right || border.width
            }
        }
        return style
    }

    onEnter() {
        const { hover, hoverColor } = this.props
        if (hover) {
            this.setState({
                hovered: true,
                currentBackgroundColor: hoverColor || DEFAULT_HOVER_COLOR
            })
        }
    }

    onExit() {
        const { hover, bg } = this.props
        if (hover) {
            this.setState({
                hovered: false,
                currentBackgroundColor: bg || DEFAULT_BACKGROUND_COLOR
            })
        }
    }

    render() {
        const { currentBackgroundColor } = this.state
        return (
            <VrView style={[{
                backgroundColor: currentBackgroundColor,
                ...this.getBorderStyle(),
                ...this.getItemsAlignment(),
                ...this.getPadding(),
                ...this.getDimensions(),
            }, this.props.style]}
                onEnter={this.onEnter.bind(this)}
                onExit={this.onExit.bind(this)}>
                {this.props.children}
            </VrView>
        );
    }
};


