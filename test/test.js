import * as cqlt from 'cql-testing'
import * as path from 'path'

const __dirname = path.resolve();

cqlt.test(path.join(__dirname));