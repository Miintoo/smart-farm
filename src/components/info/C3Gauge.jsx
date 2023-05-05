import c3 from 'c3';

const chart = () =>
  c3.generate({
    bindto: '#gaugechart',
    data: {
      columns: [['data', 91.4]],
      type: 'gauge',
      onclick(d, i) {
        console.log('onclick', d, i);
      },
      onmouseover(d, i) {
        console.log('onmouseover', d, i);
      },
      onmouseout(d, i) {
        console.log('onmouseout', d, i);
      }
    },
    gauge: {
      //        label: {
      //            format: function(value, ratio) {
      //                return value;
      //            },
      //            show: false // to turn off the min/max labels.
      //        },
      //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
      //    max: 100, // 100 is default
      //    units: ' %',
      //    width: 39 // for adjusting arc thickness
    },
    color: {
      pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
      threshold: {
        //            unit: 'value', // percentage is default
        //            max: 200, // 100 is default
        values: [30, 60, 90, 100]
      }
    },
    size: {
      height: 180
    }
  });

export default chart;
