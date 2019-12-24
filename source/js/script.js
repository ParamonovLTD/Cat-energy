// function imageComparison(selector) {

//   let comparison = $(selector)
//       // .addClass('image-comparison')
//       // .prepend('<div class="comparison__image--before"></div>')
//       .append('<input type="range" class="comparison__slider">');

//   let images = comparison
//       .find('img')
//       .addClass('comparison__image')
//       .css('max-width', comparison.width());

//   let before = comparison
//       .find('.comparison__image--before')
//       .append(images.eq(0));

//   comparison
//       .find('.comparison__slider')
//       .on('dragstart', () => false) // отмена станд. drug&drop
//       .on('mousedown', function(e) {
//           let slider = $(this);
//           let doc = $(document).on('mousemove', (e) => {
//               let offset = e.pageX - comparison.position().left;
//               let width = comparison.width();

//               // установим границы, чтобы ползунок не выходил
//               if (offset < 0) offset = 0;
//               if (offset > width) offset = width;

//               slider.css('left', offset + 'px');
//               before.css('width', offset * 1.6 + 'px');
//           });

//           doc.on('mouseup', () => doc.off('mousemove'));
//       });
// };

// imageComparison('#comparison');
