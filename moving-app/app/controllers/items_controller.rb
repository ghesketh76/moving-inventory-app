class ItemsController < ApplicationController

    def index 
        @items = Item.all 
        render json: @items, inlcude: :room
    end

    def show 
        @item = Item.find(params[:id])
        render json: @item, include: :room
    end

    def create 
        @item = Item.create(name: params[:name], quantity: params[:quantity])
        render json: @item
    end

    def update 
        @item = Item.find(params[:id])
        @item.update(name: params[:name], quantity: params[:quantity])
        render json: @item
    end

    def delete 
        @item = Item.find(params[:id])
        @item.destroy
    end
end
