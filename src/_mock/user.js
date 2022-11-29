// Library fake data
import {
    faker
} from '@faker-js/faker';

const students = [...Array(25).map((_, index) => ({
    id: faker.datatype.uuid(),
    avatarURL: `assets/images/avatars/avatar_${index + 1}.jpg}`,
    name: faker.name.fullName(),
    email: faker.internet.email()
}))]

export default students;