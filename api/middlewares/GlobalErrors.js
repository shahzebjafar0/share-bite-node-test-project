module.exports = (err, req, res, next) => {
  if (err.errno === 1452) {
    return res.status(400).json({
      error: 'Foreign key constraint violation',
      message: 'Cannot insert or update row: a foreign key constraint fails'
    });
  } else if (err.errno === 1451) {
    return res.status(400).json({
      message:
        'Error: Cannot delete or update record. This record is referenced by other records in the database and cannot be deleted or updated until those references are removed or updated.'
    });
  } else if (err) {
    return res.status(err.statusCode || 500).json({
      error: err.message || 'error'
    });
  }
};
