import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('books')
export default class BooksController {
  constructor(private readonly booksServices: BooksService) {}
  @Post('post')
  postBook( @Body() book: CreateBookDto) {
    return this.booksServices.insert(book);
  }

  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
  })
  @Delete('delete')
  deleteBook(@Query('id') id: number) {
    return this.booksServices.delete(id);
  }

  @ApiQuery({
    name: 'id',
    required: true,
    type: Number,
  })
  @Put('put')
  putBook(@Query('id') id:number, @Body() book: CreateBookDto) {
    return this.booksServices.update(id, book);
  }

  @Get()
  getAll() {
    return this.booksServices.getAllBooks();
  }
}