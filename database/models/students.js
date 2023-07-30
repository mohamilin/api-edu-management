"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /**
       type:DataTypes,
       defaultValue: 
       
       */
    }
  }
  students.init(
    // {
    //   registrationNumber: DataTypes.STRING,
    //   fullName: {
    //     type: DataTypes.STRING,
    //   },
    //   isStudent: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: true,
    //   },
    //   isAlumni: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    //   },
    //   isTransfer: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    //   },
    //   joinDate: {
    //     type: DataTypes.DATE,
    //   },
    //   endDate: {
    //     type: DataTypes.DATE,
    //     defaultValue: null,
    //   },
    //   nisn: {
    //     type: DataTypes.STRING,
    //   },
    //   nik: {
    //     type: DataTypes.STRING,
    //   },
    //   prevSchoolName: {
    //     type: DataTypes.STRING,
    //   },
    //   prevSchoolAddress: {
    //     type: DataTypes.STRING,
    //   },
    //   skhun: {
    //     type: DataTypes.STRING,
    //   },
    //   gender: {
    //     type: DataTypes.ENUM("L", "P"),
    //   },
    //   streetAddress: {
    //     type: DataTypes.STRING,
    //   },
    //   birthPlace: {
    //     type: DataTypes.STRING,
    //   },
    //   birthDate: {
    //     type: DataTypes.DATE,
    //   },
    //   religionId: {
    //     type: DataTypes.INTEGER,
    //   },
    //   citezenship: {
    //     type: DataTypes.ENUM("WNI", "WNA"),
    //   },
    //   country: {
    //     type: DataTypes.STRING,
    //   },
    //   noHp: {
    //     type: DataTypes.INTEGER,
    //   },
    //   fatherName: {
    //     type: DataTypes.STRING,
    //   },
    //   motherNamae: {
    //     type: DataTypes.STRING,
    //   },
    //   createdBy: {
    //     type: DataTypes.INTEGER,
    //     defaultValue: 0,
    //   },
    //   updatedBy: {
    //     type: DataTypes.INTEGER,
    //     defaultValue: 0,
    //   },
    //   deletedBy: {
    //     type: DataTypes.INTEGER,
    //     defaultValue: 0,
    //   },
    //   isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    // },
    {
      major_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      first_choice_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      second_choice_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      registration_number: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      admission_exam_number: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      selection_result: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      admission_phase_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      admission_type_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      photo: {
        type: DataTypes.STRING,
        defaultValue: "default-user.png",
      },
      achievement: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      is_student: {
        type: DataTypes.ENUM("true", "false"),
        defaultValue: "false",
      },
      is_prospective_student: {
        type: DataTypes.ENUM("true", "false"),
        defaultValue: "false",
      },
      is_alumni: {
        type: DataTypes.ENUM("true", "false"),
        defaultValue: "false",
      },
      is_transfer: {
        type: DataTypes.ENUM("true", "false"),
        defaultValue: "false",
      },
      school_level: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      re_registration: {
        type: DataTypes.ENUM("true", "false"),
        defaultValue: null,
      },
      start_date: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      identity_number: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      nisn: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      nik: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      prev_exam_number: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      prev_diploma_number: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      paud: {
        type: DataTypes.ENUM("true", "false"),
        defaultValue: "false",
      },
      tk: {
        type: DataTypes.ENUM("true", "false"),
        defaultValue: "false",
      },
      skhun: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      prev_school_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      prev_school_address: {
        type: DataTypes.TEXT,
        defaultValue: null,
      },
      hobby: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      ambition: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      full_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      gender: {
        type: DataTypes.ENUM("M", "F"),
        defaultValue: "M",
      },
      birth_place: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      birth_date: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      religion_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      special_need_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      street_address: {
        type: DataTypes.TEXT,
        defaultValue: 0,
      },
      rt: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      rw: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      sub_village: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      village: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      sub_district: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      district: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      province: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      postal_code: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      residence_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      transportation_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      phone: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      mobile_phone: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      citizenship: {
        type: DataTypes.ENUM("WNI", "WNA"),
        defaultValue: "WNI",
      },
      country: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      father_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      father_phone: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      father_birth_year: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      father_education_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      father_employment_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      father_monthly_income_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      father_special_need_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      mother_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      mother_phone: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      mother_birth_year: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      mother_education_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      mother_employment_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      mother_monthly_income_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      mother_special_need_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      guardian_name: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      guardian_phone: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      guardian_birth_year: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      guardian_education_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      guardian_employment_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      guardian_monthly_income_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      mileage: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      traveling_time: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      height: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      weight: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      sibling_number: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      student_status_id: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      end_date: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      reason: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: "students",
      underscored: true,
    }
  );
  return students;
};

// CREATE TABLE `students` (
//   `id` bigint unsigned NOT NULL AUTO_INCREMENT,
//   `major_id` bigint DEFAULT '0' COMMENT 'Program Keahlian',
//   `first_choice_id` bigint DEFAULT '0' COMMENT 'Pilihan Pertama PPDB',
//   `second_choice_id` bigint DEFAULT '0' COMMENT 'Pilihan Kedua PPDB',
//   `registration_number` varchar(10) DEFAULT NULL COMMENT 'Nomor Pendaftaran',
//   `admission_exam_number` varchar(10) DEFAULT NULL COMMENT 'Nomor Ujian Tes Tulis',
//   `selection_result` varchar(100) DEFAULT NULL COMMENT 'Hasil Seleksi PPDB/PMB',
//   `admission_phase_id` bigint DEFAULT '0' COMMENT 'Gelombang Pendaftaran',
//   `admission_type_id` bigint DEFAULT '0' COMMENT 'Jalur Pendaftaran',
//   `photo` varchar(100) DEFAULT NULL,
//   `achievement` text COMMENT 'Prestasi Calon Peserta Didik / Mahasiswa',
//   `is_student` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'Apakah Siswa Aktif ? Set true jika lolos seleksi PPDB dan set FALSE jika sudah lulus',
//   `is_prospective_student` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'Apakah Calon Siswa Baru ?',
//   `is_alumni` enum('true','false','unverified') NOT NULL DEFAULT 'false' COMMENT 'Apakah Alumni?',
//   `is_transfer` enum('true','false') NOT NULL DEFAULT 'false' COMMENT 'Jenis Pendaftaran : Baru / Pindahan ?',
//   `re_registration` enum('true','false') DEFAULT NULL COMMENT 'Konfirmasi Pendaftaran Ulang Calon Siswa Baru',
//   `start_date` date DEFAULT NULL COMMENT 'Tanggal Masuk Sekolah',
//   `identity_number` varchar(50) DEFAULT NULL COMMENT 'NIS/NIM',
//   `nisn` varchar(50) DEFAULT NULL COMMENT 'Nomor Induk Siswa Nasional',
//   `nik` varchar(50) DEFAULT NULL COMMENT 'Nomor Induk Kependudukan/KTP',
//   `prev_exam_number` varchar(50) DEFAULT NULL COMMENT 'Nomor Peserta Ujian Sebelumnya',
//   `prev_diploma_number` varchar(50) DEFAULT NULL COMMENT 'Nomor Ijazah Sebelumnya',
//   `paud` enum('true','false') DEFAULT NULL COMMENT 'Apakah Pernah PAUD',
//   `tk` enum('true','false') DEFAULT NULL COMMENT 'Apakah Pernah TK',
//   `skhun` varchar(50) DEFAULT NULL COMMENT 'No. Seri Surat Keterangan Hasil Ujian Nasional Sebelumnya',
//   `prev_school_name` varchar(255) DEFAULT NULL COMMENT 'Nama Sekolah Sebelumnya',
//   `prev_school_address` varchar(255) DEFAULT NULL COMMENT 'Alamat Sekolah Sebelumnya',
//   `hobby` varchar(255) DEFAULT NULL,
//   `ambition` varchar(255) DEFAULT NULL COMMENT 'Cita-Cita',
//   `full_name` varchar(150) NOT NULL,
//   `gender` enum('M','F') NOT NULL DEFAULT 'M',
//   `birth_place` varchar(255) DEFAULT NULL,
//   `birth_date` date DEFAULT NULL,
//   `religion_id` bigint DEFAULT '0',
//   `special_need_id` bigint DEFAULT '0' COMMENT 'Berkeburuhan Khusus',
//   `street_address` varchar(255) DEFAULT NULL COMMENT 'Alamat Jalan',
//   `rt` varchar(10) DEFAULT NULL COMMENT 'Alamat Jalan',
//   `rw` varchar(10) DEFAULT NULL COMMENT`'Alamat Jalan',
//   `sub_village` varchar(255) DEFAULT NULL COMMENT 'Nama Dusun',
//   `village` varchar(255) DEFAULT NULL COMMENT 'Nama Kelurahan/Desa',
//   `sub_district` varchar(255) DEFAULT NULL COMMENT 'Kecamatan',
//   `district` varchar(255) DEFAULT NULL COMMENT 'Kota/Kabupaten',
//   `postal_code` varchar(20) DEFAULT NULL COMMENT 'Kode POS',
//   `residence_id` bigint DEFAULT '0' COMMENT 'Tempat Tinggal',
//   `transportation_id` bigint DEFAULT '0' COMMENT 'Moda Transportasi',
//   `phone` varchar(50) DEFAULT NULL,
//   `mobile_phone` varchar(50) DEFAULT NULL,
//   `email` varchar(150) DEFAULT NULL,
//   `sktm` varchar(100) DEFAULT NULL COMMENT 'Surat Keterangan Tidak Mampu (SKTM)',
//   `kks` varchar(100) DEFAULT NULL COMMENT 'Kartu Keluarga Sejahtera (KKS)',
//   `kps` varchar(100) DEFAULT NULL COMMENT 'Kartu Pra Sejahtera (KPS)',
//   `kip` varchar(100) DEFAULT NULL COMMENT 'Kartu Indonesia Pintar (KIP)',
//   `kis` varchar(100) DEFAULT NULL COMMENT 'Kartu Indonesia Sehat (KIS)',
//   `citizenship` enum('WNI','WNA') NOT NULL DEFAULT 'WNI' COMMENT 'Kewarganegaraan',
//   `country` varchar(255) DEFAULT NULL,
//   `father_name` varchar(150) DEFAULT NULL,
//   `father_birth_year` year DEFAULT NULL,
//   `father_education_id` bigint DEFAULT '0',
//   `father_employment_id` bigint DEFAULT '0',
//   `father_monthly_income_id` bigint DEFAULT '0',
//   `father_special_need_id` bigint DEFAULT '0',
//   `mother_name` varchar(150) DEFAULT NULL,
//   `mother_birth_year` year DEFAULT NULL,
//   `mother_education_id` bigint DEFAULT '0',
//   `mother_employment_id` bigint DEFAULT '0',
//   `mother_monthly_income_id` bigint DEFAULT '0',
//   `mother_special_need_id` bigint DEFAULT '0',
//   `guardian_name` varchar(150) DEFAULT NULL,
//   `guardian_birth_year` year DEFAULT NULL,
//   `guardian_education_id` bigint DEFAULT '0',
//   `guardian_employment_id` bigint DEFAULT '0',
//   `guardian_monthly_income_id` bigint DEFAULT '0',
//   `mileage` smallint DEFAULT NULL COMMENT 'Jarak tempat tinggal ke sekolah',
//   `traveling_time` smallint DEFAULT NULL COMMENT 'Waktu Tempuh',
//   `height` smallint DEFAULT NULL COMMENT 'Tinggi Badan',
//   `weight` smallint DEFAULT NULL COMMENT 'Berat Badan',
//   `sibling_number` smallint DEFAULT '0' COMMENT 'Jumlah Saudara Kandung',
//   `student_status_id` bigint DEFAULT '0' COMMENT 'Status siswa',
//   `end_date` date DEFAULT NULL COMMENT 'Tanggal Keluar',
//   `reason` varchar(255) DEFAULT NULL COMMENT 'Diisi jika peserta didik sudah keluar',
//   `created_at` datetime DEFAULT NULL,
//   `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//   `deleted_at` datetime DEFAULT NULL,
//   `restored_at` datetime DEFAULT NULL,
//   `created_by` bigint DEFAULT '0',
//   `updated_by` bigint DEFAULT '0',
//   `deleted_by` bigint DEFAULT '0',
//   `restored_by` bigint DEFAULT '0',
//   `is_deleted` enum('true','false') DEFAULT 'false',
//   PRIMARY KEY (`id`),
//   KEY `students_registration_number__idx` (`registration_number`) USING BTREE,
//   KEY `students_identity_number__idx` (`identity_number`) USING BTREE,
//   KEY `students_full_name__idx` (`full_name`) USING BTREE,
//   KEY `students_first_choice_id__idx` (`first_choice_id`) USING BTREE,
//   KEY `students_second_choice_id__idx` (`second_choice_id`) USING BTREE,
//   KEY `students_major_id__idx` (`major_id`) USING BTREE,
//   KEY `students_admission_phase_id__idx` (`admission_phase_id`) USING BTREE,
//   KEY `students_admission_type_id__idx` (`admission_type_id`) USING BTREE,
//   KEY `students_student_status_id__idx` (`student_status_id`) USING BTREE
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
