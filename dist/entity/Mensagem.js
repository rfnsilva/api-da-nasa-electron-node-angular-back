"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mensagem = void 0;

var _typeorm = require("typeorm");

var _User = require("./User");

var _Grupo = require("./Grupo");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Mensagem = (_dec = (0, _typeorm.Entity)('mensagem'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)("uuid"), _dec3 = (0, _typeorm.Column)("varchar"), _dec4 = (0, _typeorm.Column)("varchar"), _dec5 = (0, _typeorm.ManyToOne)(type => _User.User, user => user.mensagens), _dec6 = (0, _typeorm.ManyToOne)(type => _Grupo.Grupo, grupo => grupo.mensagens), _dec7 = (0, _typeorm.CreateDateColumn)({
  type: "timestamp"
}), _dec8 = (0, _typeorm.CreateDateColumn)({
  type: "timestamp"
}), _dec(_class = (_class2 = (_temp = class Mensagem {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "autor", _descriptor2, this);

    _initializerDefineProperty(this, "mensagem", _descriptor3, this);

    _initializerDefineProperty(this, "user", _descriptor4, this);

    _initializerDefineProperty(this, "grupo", _descriptor5, this);

    _initializerDefineProperty(this, "createdAt", _descriptor6, this);

    _initializerDefineProperty(this, "updatedAt", _descriptor7, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autor", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mensagem", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "grupo", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "createdAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "updatedAt", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.Mensagem = Mensagem;