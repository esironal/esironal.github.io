(function() {
  var ShuffleGrid, addClass, grid, hasClass, iconsList, removeClass,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  addClass = function(el, className) {
    if (hasClass(el, className)) {
      return;
    }
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  };

  removeClass = function(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  };

  hasClass = function(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
    }
  };

  ShuffleGrid = (function() {
    var VENDORS;

    VENDORS = ['webkit', 'Moz'];

    ShuffleGrid.prototype.zIndex = 100;

    function ShuffleGrid(context, cols, rows, colSize, rowSize, paddingX, paddingY) {
      this.context = context;
      this.cols = cols;
      this.rows = rows;
      this.colSize = colSize;
      this.rowSize = rowSize;
      this.paddingX = paddingX != null ? paddingX : 0;
      this.paddingY = paddingY != null ? paddingY : 0;
      this.stopDrag = bind(this.stopDrag, this);
      this.startDrag = bind(this.startDrag, this);
      this.numCells = bind(this.numCells, this);
      this.onMouseRelease = bind(this.onMouseRelease, this);
      this.onMouseMove = bind(this.onMouseMove, this);
      this.onMousePress = bind(this.onMousePress, this);
      this.getCell = bind(this.getCell, this);
      this.getPosition = bind(this.getPosition, this);
      this.positionItem = bind(this.positionItem, this);
      this.snapToGrid = bind(this.snapToGrid, this);
      this.shuffleItems = bind(this.shuffleItems, this);
      this.addItem = bind(this.addItem, this);
      this.initIndex = bind(this.initIndex, this);
      this.numItems = 0;
      this.initIndex();
      this.items = [].slice.call(this.context.children);
      this.items.forEach((function(_this) {
        return function(item, id) {
          return _this.addItem(item);
        };
      })(this));
      return;
    }

    ShuffleGrid.prototype.initIndex = function() {
      var i;
      this.itemVOs = [];
      this.index = new Array(this.rows);
      i = 0;
      while (i < this.rows) {
        this.index[i++] = new Array(this.cols);
      }
    };

    ShuffleGrid.prototype.addItem = function(item) {
      var col, id, itemVO, position, row;
      col = this.numItems % this.cols;
      row = Math.floor(this.numItems / this.cols);
      position = this.getPosition(row, col);
      id = this.numItems;
      this.numItems++;
      itemVO = {
        row: row,
        col: col,
        item: item,
        id: id
      };
      item.style.width = this.colSize + "px";
      item.style.height = this.rowSize + "px";
      item.setAttribute('id', id);
      this.positionItem(item, position.x, position.y);
      this.index[row][col] = itemVO;
      this.itemVOs[id] = itemVO;
      if (hasClass(item, 'placeholder')) {
        return;
      }
      item.children[0].style.webkitAnimationDelay = Math.random() * 0.5 + 's';
      item.children[0].style.MozAnimationDelay = Math.random() * 0.5 + 's';
      item.addEventListener('mousedown', this.onMousePress, false);
      return item;
    };

    ShuffleGrid.prototype.shuffleItems = function() {
      var cell, col, hMove, i, item, itemVO, move, row, vMove;
      itemVO = this.itemVOs[this.currentItem.getAttribute('id')];
      cell = this.getCell(parseInt(this.currentItem.getAttribute('x')), parseInt(this.currentItem.getAttribute('y')));
      col = cell.x;
      row = cell.y;
      if (col === itemVO.col && row === itemVO.row) {
        return;
      }
      hMove = col - itemVO.col;
      vMove = row - itemVO.row;
      move = [];
      if (hMove < 0) {
        i = itemVO.col - 1;
        while (i >= itemVO.col + hMove) {
          if (this.index[itemVO.row][i]) {
            item = this.index[itemVO.row][i];
            item.col++;
            this.index[item.row][item.col] = item;
            move.push(item);
          }
          i--;
        }
      } else {
        i = itemVO.col + 1;
        while (i <= itemVO.col + hMove) {
          if (this.index[itemVO.row][i]) {
            item = this.index[itemVO.row][i];
            item.col--;
            this.index[item.row][item.col] = item;
            move.push(item);
          }
          i++;
        }
      }
      if (vMove < 0) {
        i = itemVO.row - 1;
        while (i >= itemVO.row + vMove) {
          if (this.index[i][itemVO.col + hMove]) {
            item = this.index[i][itemVO.col + hMove];
            item.row++;
            this.index[item.row][item.col] = item;
            move.push(item);
          }
          i--;
        }
      } else {
        i = itemVO.row + 1;
        while (i <= itemVO.row + vMove) {
          if (this.index[i][itemVO.col + hMove]) {
            item = this.index[i][itemVO.col + hMove];
            item.row--;
            this.index[item.row][item.col] = item;
            move.push(item);
          }
          i++;
        }
      }
      i = 0;
      while (i < move.length) {
        this.snapToGrid(move[i++]);
      }
      itemVO.row = row;
      itemVO.col = col;
      this.index[row][col] = itemVO;
    };

    ShuffleGrid.prototype.snapToGrid = function(itemVO) {
      var position;
      position = this.getPosition(itemVO.row, itemVO.col);
      this.positionItem(itemVO.item, position.x, position.y);
    };

    ShuffleGrid.prototype.positionItem = function(item, x, y) {
      var j, len, vendor;
      for (j = 0, len = VENDORS.length; j < len; j++) {
        vendor = VENDORS[j];
        item.style[vendor + "Transform"] = "translateX(" + x + "px) translateY(" + y + "px)";
      }
    };

    ShuffleGrid.prototype.getPosition = function(row, col) {
      var offsetY, position;
      if (row > 4) {
        offsetY = 20;
      } else {
        offsetY = 0;
      }
      position = {
        x: col * (this.colSize + this.paddingX),
        y: row * (this.rowSize + this.paddingY) + offsetY
      };
      return position;
    };

    ShuffleGrid.prototype.getCell = function(x, y) {
      var cell;
      cell = {
        x: Math.max(0, Math.min(this.cols - 1, Math.round(x / (this.colSize + this.paddingX)))),
        y: Math.max(0, Math.min(this.rows - 1, Math.round(y / (this.rowSize + this.paddingY))))
      };
      return cell;
    };

    ShuffleGrid.prototype.onMousePress = function(event) {
      var contextOffset;
      this.currentItem = event.currentTarget;
      contextOffset = this.context.getBoundingClientRect();
      this.originOffset = {
        x: event.offsetX + contextOffset.left + 16,
        y: event.offsetY + contextOffset.top + 26
      };
      this.startDrag(this.currentItem);
      this.onMouseMove(event);
      this.context.addEventListener('mouseup', this.onMouseRelease, false);
      this.context.addEventListener('mousemove', this.onMouseMove, false);
      this.context.addEventListener('mouseleave', this.onMouseRelease, false);
    };

    ShuffleGrid.prototype.onMouseMove = function(event) {
      var x, y;
      x = event.clientX - this.originOffset.x;
      y = event.clientY - this.originOffset.y;
      this.currentItem.setAttribute('x', x);
      this.currentItem.setAttribute('y', y);
      this.positionItem(this.currentItem, x, y);
      this.shuffleItems();
    };

    ShuffleGrid.prototype.onMouseRelease = function(event) {
      this.currentItem.removeEventListener('mouseout', this.onMouseRelease);
      this.stopDrag(this.currentItem);
      this.context.removeEventListener('mousemove', this.onMouseMove);
      this.snapToGrid(this.itemVOs[this.currentItem.getAttribute('id')]);
    };

    ShuffleGrid.prototype.numCells = function() {
      return this.rows * this.cols;
    };

    ShuffleGrid.prototype.startDrag = function(item) {
      this.zIndex++;
      item.style.zIndex = this.zIndex;
      addClass(item, 'dragging');
      addClass(this.context, 'shaking');
    };

    ShuffleGrid.prototype.stopDrag = function(item) {
      removeClass(item, 'dragging');
      removeClass(this.context, 'shaking');
    };

    return ShuffleGrid;

  })();

  iconsList = document.querySelector('.icons-list ul');

  grid = new ShuffleGrid(iconsList, 4, 6, 60, 60, 16, 28);

}).call(this);