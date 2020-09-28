import { VALUES_CSS } from '../script.js';

function createGraphic() {
  function createArrowGraphic() {
    const arrowGraphic = document.createElement('span');
    arrowGraphic.style.borderTop = '3px solid #fff';
    arrowGraphic.style.borderRadius = '50%';
    arrowGraphic.style.height = '3.25rem';
    arrowGraphic.style.width = '6.5rem';
    arrowGraphic.style.position = 'absolute';
    arrowGraphic.style.left = 'calc(100% - 4.75rem)';
    arrowGraphic.style.bottom = '3rem';
    arrowGraphic.style.transform = 'rotate(-30deg)';
    return arrowGraphic;
  }
  function createChartIcon() {
    const chartIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chartIcon.setAttributeNS(null, 'x', '0px');
    chartIcon.setAttributeNS(null, 'y', '0px');
    chartIcon.setAttributeNS(null, 'enableBackground', 'new 0 0 100 100');
    chartIcon.setAttributeNS(null, 'viewBox', '-17 6 100 100');
    // chartIcon.setAttributeNS(null, 'xml:space', 'preserve');  
  
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M48,71h4v20c0,1.1-0.9,2-2,2s-2-0.9-2-2V71z M32.07,90.47c-0.29,1.07,0.34,2.17,1.4,2.46C33.65,92.98,33.83,93,34,93c0.88,0,1.69-0.58,1.93-1.47L41.53,71h-4.15L32.07,90.47z M62.62,71h-4.15l5.6,20.53C64.31,92.42,65.12,93,66,93c0.17,0,0.35-0.02,0.53-0.07c1.06-0.29,1.69-1.39,1.4-2.46L62.62,71z M80,7H20c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3h60c1.65,0,3-1.35,3-3C83,8.35,81.65,7,80,7z M23,17h54v48c0,1.1-0.9,2-2,2H25c-1.1,0-2-0.9-2-2V17z M32.59,47.41l4,4C36.98,51.8,37.49,52,38,52s1.02-0.2,1.41-0.59L48,42.83l4.59,4.58C52.98,47.8,53.49,48,54,48s1.02-0.2,1.41-0.59l7-7L64,38.83V44c0,1.1,0.9,2,2,2s2-0.9,2-2V34c0-0.13-0.01-0.26-0.04-0.39c-0.01-0.06-0.03-0.12-0.05-0.17c-0.02-0.07-0.04-0.14-0.06-0.2c-0.03-0.07-0.07-0.13-0.1-0.2c-0.03-0.05-0.05-0.1-0.09-0.15c-0.07-0.11-0.15-0.21-0.25-0.3c-0.09-0.1-0.19-0.18-0.3-0.25c-0.05-0.04-0.1-0.06-0.15-0.08c-0.06-0.04-0.13-0.08-0.2-0.11c-0.06-0.02-0.13-0.04-0.2-0.06c-0.05-0.02-0.11-0.04-0.17-0.05C66.26,32.01,66.13,32,66,32H56c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h5.17l-1.58,1.59L54,43.17l-4.59-4.58c-0.78-0.79-2.04-0.79-2.82,0L38,47.17l-2.59-2.58c-0.78-0.79-2.04-0.79-2.82,0C31.8,45.37,31.8,46.63,32.59,47.41z');
    chartIcon.appendChild(path);
    return chartIcon;
  }
  function createCircledTick() {
    const circledTick = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    circledTick.setAttribute("width", "100%");
    circledTick.setAttribute("height", "28");
    circledTick.setAttribute("width", "28");
    circledTick.setAttribute('display', 'block');
    circledTick.style.margin = "auto";
    const tick = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tick.setAttributeNS(null, 'd', 'M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z   M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685  c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971  l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969  C156.146,65.765,156.146,74.362,150.862,79.646z');
    tick.style.scale = "0.14";
    tick.style.x = "50%";
    circledTick.appendChild(tick);
    return circledTick;
  }
  function createUnderLineGraphic() {
    const underLineGraphic = document.createElement('span');
    //display
    underLineGraphic.style.width = '90%'
    underLineGraphic.style.position = 'absolute';
    underLineGraphic.style.bottom = VALUES_CSS['space_BottomTo1stElement']
    underLineGraphic.style.left = '5%';
    // aesthetic
    underLineGraphic.style.borderTop = '1px solid #fff';
    underLineGraphic.style.borderRadius = '50%'
    return underLineGraphic;
  }
}

export default createGraphic;